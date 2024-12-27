import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from './lib/schemas';
import { ContactForm } from './components/form-steps/ContactForm';
import { AddressForm } from './components/form-steps/AddressForm';
import { AdditionalInfo } from './components/form-steps/AdditionalInfo';
import { Confirmation } from './components/form-steps/Confirmation';

const steps = [
  { number: 1, title: 'Sign Up' },
  { number: 2, title: 'Address' },
  { number: 3, title: 'Additional Info' },
  { number: 4, title: 'Review' },
];

function App() {
  const [step, setStep] = useState(1);
  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const { handleSubmit, trigger } = methods;

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  const handleNext = async () => {
    const fields =
      step === 1
        ? ['name', 'email', 'phone']
        : step === 2
        ? ['street', 'city', 'state', 'zipCode']
        : [];

    if (fields.length === 0 || (await trigger(fields))) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-3xl">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="bg-white shadow-sm rounded-xl p-8">
              {/* Progress Steps */}
              <div className="flex items-center space-x-4 mb-12">
                {steps.map((s, index) => (
                  <div key={s.number} className="flex items-center flex-1">
                    <div className="flex items-center gap-2 flex-col">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                          step >= s.number
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {s.number}
                      </div>
                      <span
                        className={`ml-2 text-sm text-center ${
                          step >= s.number ? 'text-gray-900' : 'text-gray-400'
                        }`}
                      >
                        {s.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex-1 h-[1px] w-[60px] bg-gray-200 mx-4" />
                    )}
                  </div>
                ))}
              </div>

              {step === 1 && <ContactForm />}
              {step === 2 && <AddressForm />}
              {step === 3 && <AdditionalInfo />}
              {step === 4 && <Confirmation />}

              <div className="mt-8 flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="px-6 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
                  >
                    Previous
                  </button>
                )}
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className={`px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      step > 1 ? 'ml-auto' : ''
                    }`}
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default App;
