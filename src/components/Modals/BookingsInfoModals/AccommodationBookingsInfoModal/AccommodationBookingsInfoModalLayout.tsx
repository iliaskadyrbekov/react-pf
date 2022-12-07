import React from 'react';

interface IAccommodationBookingsInfoModalLayoutProps {
  mainInfo: React.ReactNode;
  actions: React.ReactNode;
}

const classes = {
  wrapper: '',
  actionsWrapper: 'px-6 pb-6 w-full flex justify-end flex-row space-x-4',
};

const AccommodationBookingsInfoModalLayout = ({ mainInfo, actions }: IAccommodationBookingsInfoModalLayoutProps) => {
  return (
    <div className={classes.wrapper}>
      {mainInfo}
      <div className={classes.actionsWrapper}>{actions}</div>
    </div>
  );
};

export default AccommodationBookingsInfoModalLayout;
