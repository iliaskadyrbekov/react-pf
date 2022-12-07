import React from 'react';
import { CheckIcon } from '@heroicons/react/solid';

import { classNames } from '@utils/classNames';

interface ISimpleOptionProps<T> {
  value: T;
  label: string;
  selected: boolean;
  active: boolean;
  disabled: boolean;
}

const SimpleOption = <T,>({ label, selected, active }: ISimpleOptionProps<T>) => {
  return (
    <>
      <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>{label}</span>

      {selected ? (
        <span
          className={classNames(
            active ? 'text-white' : 'text-indigo-600',
            'absolute inset-y-0 right-0 flex items-center pr-4',
          )}
        >
          <CheckIcon className="h-5 w-5" aria-hidden="true" />
        </span>
      ) : null}
    </>
  );
};

export default SimpleOption;
