import { CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '../ui/dialog';

export function SubmissionSuccessModal({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-md border-stone-200 bg-[#fffdf7] p-8 text-center sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-green-200 bg-green-50 text-green-600 shadow-sm">
          <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
        </div>
        <DialogTitle className="pt-2 font-display text-2xl font-bold text-stone-900">
          Your Information Has Been Submitted!
        </DialogTitle>
        <DialogDescription className="text-base leading-relaxed text-stone-600">
          Thank you for contacting SmartPooja. We have received your information, and our team
          will get back to you soon.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
