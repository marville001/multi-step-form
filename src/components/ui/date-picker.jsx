import React from 'react';
import { Input } from './input';

export function DatePicker() {
  return (
    <div className="flex gap-2">
      <Input
        type="text"
        placeholder="DD"
        className="w-16 text-center"
        maxLength="2"
      />
      <span className="text-gray-400 self-center">/</span>
      <Input
        type="text"
        placeholder="MM"
        className="w-16 text-center"
        maxLength="2"
      />
      <span className="text-gray-400 self-center">/</span>
      <Input
        type="text"
        placeholder="YYYY"
        className="w-24 text-center"
        maxLength="4"
      />
    </div>
  );
}