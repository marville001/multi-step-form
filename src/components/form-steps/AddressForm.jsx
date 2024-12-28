import { useFormContext } from 'react-hook-form';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

export function AddressForm() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="mb-8 text-left">
        <h2 className="text-2xl font-bold text-gray-900">Address Information</h2>
        <p className="mt-1 text-sm text-gray-500">Step 2/4</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="street">Street Address</Label>
        <Input 
          id="street" 
          {...register("street")}
          className={`border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
            errors.street ? 'border-red-300 bg-red-50' : ''
          }`}
        />
        {errors.street && (
          <p className="text-sm text-red-500">{errors.street.message}</p>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input 
            id="city" 
            {...register("city")}
            className={`border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
              errors.city ? 'border-red-300 bg-red-50' : ''
            }`}
          />
          {errors.city && (
            <p className="text-sm text-red-500">{errors.city.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Input 
            id="state" 
            {...register("state")}
            className={`border-gray-200 focus:border-blue-500 focus:ring-blue-500 uppercase ${
              errors.state ? 'border-red-300 bg-red-50' : ''
            }`}
          />
          {errors.state && (
            <p className="text-sm text-red-500">{errors.state.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="zipCode">ZIP Code</Label>
        <Input 
          id="zipCode" 
          {...register("zipCode")}
          className={`border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
            errors.zipCode ? 'border-red-300 bg-red-50' : ''
          }`}
        />
        {errors.zipCode && (
          <p className="text-sm text-red-500">{errors.zipCode.message}</p>
        )}
      </div>
    </div>
  );
}