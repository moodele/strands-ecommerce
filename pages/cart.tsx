import dynamic from 'next/dynamic';
import PageWrapper from 'components/common/PageWrapper';

const CartContainer = dynamic(() => import('components/cart/CartContainer'), {
  ssr: false
});

const cart = () => {
  return (
    <PageWrapper>
      <CartContainer checkout={false} />
    </PageWrapper>
  );
};

export default cart;
