import { createSignal } from "solid-js";

interface DialogProps {
  buttonClass?: string;
  buttonText?: string;
  confirmation: Function;
}

export default function Dialog(props: DialogProps) {
  const [isDialogOpen, setDialogOpen] = createSignal(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <button class={props.buttonClass} onClick={openDialog}>
        {props.buttonText}
      </button>

      {isDialogOpen() && (
        <>
          <div class="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
          <div class="fixed inset-0 flex items-center justify-center z-20">
            <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
              <p class="text-lg font-semibold mb-4">Confirmation</p>
              <p class="text-gray-600 mb-6">
                Are you sure you want to perform this action?
              </p>
              <div class="flex justify-end">
                <button
                  class="bg-red-500 text-white px-4 py-2 mr-2 rounded-md"
                  onClick={closeDialog}
                >
                  Cancel
                </button>
                <button
                  class="bg-green-500 text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    props.confirmation()
                    closeDialog()
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
