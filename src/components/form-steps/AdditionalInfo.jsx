import { useFormContext } from 'react-hook-form';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

export function AdditionalInfo() {
  const { register } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="text-left mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Additional Information</h2>
        <p className="text-sm text-gray-500 mt-1">Step 3/4</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="comments">Comments</Label>
        <textarea
          id="comments"
          className="min-h-[100px] w-full rounded-md border border-gray-200 bg-background px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
          {...register("comments")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferences">Preferences</Label>
        <Input 
          id="preferences" 
          {...register("preferences")}
          className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}