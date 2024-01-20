export default function SuccessAlert() {
  return (
    <div
      role="alert"
      class="relative w-full rounded-lg border p-4 [&amp;>svg~*]:pl-7 [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 [&amp;>svg]:text-foreground border-green-500 bg-green-100"
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
        class="h-6 w-6 mx-auto text-green-500"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <h5 class="mb-1 font-medium leading-none tracking-tight text-center mt-2">
        Success
      </h5>
      <div class="text-sm [&amp;_p]:leading-relaxed text-center">
        Your operation was successful!
      </div>
    </div>
  );
}
