export default function ErrorAlert() {
  return (
    <div
      role="alert"
      class="relative w-full rounded-lg border p-4 [&amp;>svg~*]:pl-7 [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 text-destructive dark:border-destructive [&amp;>svg]:text-destructive border-red-500 bg-red-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 mx-auto text-red-500"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
        <path d="M12 9v4"></path>
        <path d="M12 17h.01"></path>
      </svg>
      <h5 class="mb-1 font-medium leading-none tracking-tight text-center mt-2">
        Error
      </h5>
      <div class="text-sm [&amp;_p]:leading-relaxed text-center">
        Something went wrong. Please try again.
      </div>
    </div>
  );
}
