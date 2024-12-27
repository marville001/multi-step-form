import { useFormContext } from 'react-hook-form';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

export function ContactForm() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="text-left mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
        <p className="text-sm text-gray-500 mt-1">Step 1/4</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input 
          id="name" 
          {...register("name")}
          className={`border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
            errors.name ? 'border-red-300 bg-red-50' : ''
          }`}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input 
          id="email" 
          type="email" 
          {...register("email")}
          className={`border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
            errors.email ? 'border-red-300 bg-red-50' : ''
          }`}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input 
          id="phone" 
          type="tel" 
          {...register("phone")}
          className={`border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
            errors.phone ? 'border-red-300 bg-red-50' : ''
          }`}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>
    </div>
  );
}