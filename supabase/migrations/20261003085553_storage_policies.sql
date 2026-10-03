-- Bucket: user-documents
-- Expect object path: {auth.uid()}/{document_type}/{uuid}.{extension}
-- E.g.,
-- 550e8400-e29b-41d4-a716-446655440000/
--   income_proof/
--     10f8...c91.pdf

-- Document replacement behavior:
-- 1. Multiple docs of the same document_type are allowed
-- 2. A replacement targets a specific documents.id, not all documents with the same document_type
-- 3. A replacement is uploaded as a new Storage object with a new UUID filename
-- 4. After the new upload succeeds, the corresponding documents row is updated to reference the new storage_path
-- 5. The previous Storage object is then deleted
-- 6. Documents used by a simulated_submitted application are treated as locked and must not be replaced or deleted
-- 7. If a newer document is needed, the user uploads it as a new document instead to preserve the document used by
--     the submitted application.

-- Note:
-- Storage RLS only controls whether an authenticated user can access objects within their own Storage folder.
-- Application-level rules including submitted-document locking are enforced separately by the application/database logic

-- Select
create policy "Users can view stored documents"
on storage.objects
for select
to authenticated
using (
    bucket_id = 'user-documents'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
);

-- Insert
create policy "Users can upload own stored documents"
on storage.objects
for insert
to authenticated
with check (
       bucket_id = 'user-documents'
       and (storage.foldername(name))[1] = (select auth.uid()::text)
);

-- Update
-- WITH CHECK is required so an update cannot move an object from the user's folder into another user's folder
-- BTK document replacement does not overwrite the same Storage object. It uploads a new UUID object, updates the
-- document metadata row and deletes the previous object. This policy is retained for legitimate Storage update
-- operations that may be needed
create policy "Users can update own stored documents"
on storage.objects
for update
to authenticated
using (
    bucket_id = 'user-documents'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
) with check (
    bucket_id = 'user-documents'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
);

-- Delete
-- Used when:
-- 1. A normal document is deleted; or
-- 2. A document is successfully replaced and its previous Storage object needs to be removed
create policy "Users can delete own stored documents"
on storage.objects
for delete
to authenticated
using (
    bucket_id = 'user-documents'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
);
