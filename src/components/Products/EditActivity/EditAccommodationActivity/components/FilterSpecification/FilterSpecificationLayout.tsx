import React from 'react';

interface IFilterSpecificationLayoutProps {
  addButton: React.ReactNode;
  form: React.ReactNode;
}

const classes = {
  wrapper: 'flex flex-col',
  actionsWrapper: 'flex justify-between mb-4',
  addButtonWrapper: 'mr-auto mr-2',
  divider: 'w-full border-t border-gray-200',
  formWrapper: 'mt-4',
};

const FilterSpecificationLayout = ({ addButton, form }: IFilterSpecificationLayoutProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.actionsWrapper}>{addButton}</div>
      <div className={classes.divider} />
      <div className={classes.formWrapper}>{form}</div>
    </div>
  );
};

export default FilterSpecificationLayout;
