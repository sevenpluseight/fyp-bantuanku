-- Add DELETE policy for user-owned reminders
create policy "Users can delete own reminders"
  on public.reminders
  for delete
to authenticated
  using (
    exists (
      select 1
      from public.profiles
      where profiles.id = reminders.profile_id
        and profiles.user_id = (select auth.uid())
    )
  );
