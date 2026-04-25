import { redirect } from 'next/navigation';

// Redirect /insights/* to their new top-level routes
export default function InsightsRedirect() {
  redirect('/about');
}
