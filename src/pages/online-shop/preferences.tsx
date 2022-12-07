import React from 'react';
import { GetServerSideProps } from 'next';

import { MENU_ITEMS } from '@components/Menu/';
import { AppLayout, PageContentLayout, PageHeaderLayout } from 'src/layouts';
import { withUserCheck } from 'src/lib/withUserCheck';
import { Preferences } from '@components/OnlineShop';
import { initializeApollo } from 'src/lib/apolloClient';
import { OnlineShopSubMenu } from '@components/Menu/OnlineShopSubMenu';
import { IShopPreferencesRes, IShopPreferencesVars, SHOP_PREFERENCES } from 'src/graphql/queries/shopPreferences';

export const getServerSideProps: GetServerSideProps = withUserCheck(async ({ req, user, shop }) => {
  try {
    const client = initializeApollo(null, req);

    await client.query<IShopPreferencesRes, IShopPreferencesVars>({
      query: SHOP_PREFERENCES,
      variables: { shopId: shop?.id },
    });

    return {
      props: {
        user,
        shop,
        initialApolloState: client.cache.extract(),
      },
    };
  } catch (err) {
    return {
      props: { user, shop },
      redirect: { destination: `/online-shop`, permanent: false },
    };
  }
});

const MenuPage = () => {
  return <PageContentLayout header={<PageHeaderLayout title="Preferences" />} content={<Preferences />} />;
};

const MenuPageLayout = (page: React.ReactNode) => (
  <AppLayout menuItem={MENU_ITEMS['ONLINE_SHOP']} SubMenu={<OnlineShopSubMenu />}>
    {page}
  </AppLayout>
);
MenuPage.getLayout = MenuPageLayout;

export default MenuPage;
