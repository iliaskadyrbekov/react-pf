import React from 'react';

interface IRecurringEventFormLayoutProps {
  freq: React.ReactNode;
  weekDays: React.ReactNode;
  untilLabel: React.ReactNode;
  disableUntil: React.ReactNode;
  enableUntil: React.ReactNode;
  until: React.ReactNode;
  quantity: React.ReactNode;
  resourcesSelect: React.ReactNode;
  additionalOptions: React.ReactNode;
  actions: React.ReactNode;
}

const classes = {
  wrapper: 'flex flex-col space-y-2',
  recurringFields: 'flex flex-col space-y-4',
  untilLabel: 'text-sm font-medium text-gray-700',
  enabledUntilWrapper: 'flex items-center space-x-8',
  actionsWrapper: 'flex space-x-4 ml-auto',
};

const RecurringEventFormLayout = ({
  freq,
  weekDays,
  untilLabel,
  disableUntil,
  enableUntil,
  until,
  quantity,
  resourcesSelect,
  additionalOptions,
  actions,
}: IRecurringEventFormLayoutProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.recurringFields}>
        {freq}
        {weekDays}
        <div className={classes.wrapper}>
          <p className={classes.untilLabel}>{untilLabel}</p>
          {disableUntil}
          <div className={classes.enabledUntilWrapper}>
            {enableUntil}
            {until}
          </div>
        </div>
      </div>
      {quantity}
      {resourcesSelect}
      {additionalOptions}
      <div className={classes.actionsWrapper}>{actions}</div>
    </div>
  );
};

export default RecurringEventFormLayout;
