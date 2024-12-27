import { useFormContext } from 'react-hook-form';

export function Confirmation() {
  const { getValues } = useFormContext();
  const data = getValues();

  return (
    <div className="space-y-6">
      <div className="text-left mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Review Information</h2>
        <p className="text-sm text-gray-500 mt-1">Step 4/4</p>
      </div>

      <div className="rounded-lg border p-4">
        <h3 className="font-semibold mb-2">Contact Information</h3>
        <div className="space-y-1">
          <p><span className="font-medium">Name:</span> {data.name}</p>
          <p><span className="font-medium">Email:</span> {data.email}</p>
          <p><span className="font-medium">Phone:</span> {data.phone}</p>
        </div>
      </div>

      <div className="rounded-lg border p-4">
        <h3 className="font-semibold mb-2">Address</h3>
        <div className="space-y-1">
          <p><span className="font-medium">Street:</span> {data.street}</p>
          <p><span className="font-medium">City:</span> {data.city}</p>
          <p><span className="font-medium">State:</span> {data.state}</p>
          <p><span className="font-medium">ZIP Code:</span> {data.zipCode}</p>
        </div>
      </div>

      {(data.comments || data.preferences) && (
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Additional Information</h3>
          <div className="space-y-1">
            {data.comments && (
              <p><span className="font-medium">Comments:</span> {data.comments}</p>
            )}
            {data.preferences && (
              <p><span className="font-medium">Preferences:</span> {data.preferences}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}