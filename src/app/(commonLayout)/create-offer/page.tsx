import React from 'react';
import { CreateOfferForm } from '@/components/modules/Offers/CreateOfferForm';

export default function CreateOfferPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#fcfdfe] dark:bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <CreateOfferForm />
      </div>
    </div>
  );
}
