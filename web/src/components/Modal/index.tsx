import * as Dialog from "@radix-ui/react-dialog";

interface ModalProps {
  title?: string;
  children: React.ReactNode;
}

export const Modal = ({title, children }: ModalProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
      <Dialog.Content className="bg-[#2A2634] fixed px-8 py-8 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[520px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">{title}</Dialog.Title>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
}
