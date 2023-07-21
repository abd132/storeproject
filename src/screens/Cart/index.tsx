import React, {useContext} from 'react';
import {ActivityIndicator, FlatList, ListRenderItemInfo} from 'react-native';
import {
  Container,
  Title,
  ListLine,
  TotalArea,
  CheckoutArea,
  TotalText,
  TotalValue,
  ButtonCheckout,
  ButtonText,
  EmptyArea,
  EmptyText,
  TitleArea,
  TitleButton,
  TitleButtonText,
} from './styles';

import {CartContext, ProductCartProps} from '../../contexts/CartContext';
import ListCartProduct from '../../components/ListCartProduct';
import theme from '../../global/theme';
import AnimatedIcons from '../../Components/AnimatedIcons';

export default function Cart() {
  const {cart, loadingCart, total, removeAllItemsCart} =
    useContext(CartContext);

  const renderItem = ({item}: ListRenderItemInfo<ProductCartProps>) => (
    <ListCartProduct
      product={item.product}
      amount={item.amount}
      total={item.total}
    />
  );

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <Container>
      <TitleArea>
        <Title>My Cart</Title>
        {cart.length > 0 && (
          <TitleButton onPress={removeAllItemsCart}>
            <TitleButtonText>Remove all products</TitleButtonText>
          </TitleButton>
        )}
      </TitleArea>

      {cart.length <= 0 ? (
        <EmptyArea>
          <AnimatedIcons iconName={'emptyCart'} />
          <EmptyText>Your cart is empty...</EmptyText>
        </EmptyArea>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={item => item.product.id}
            renderItem={renderItem}
            ItemSeparatorComponent={<ListLine />}
          />
          <CheckoutArea>
            <ListLine />
            <TotalArea>
              <TotalText>Total:</TotalText>
              {loadingCart ? (
                <ActivityIndicator color={theme.colors.green} size="small" />
              ) : (
                <TotalValue>$ {total.toFixed(2)}</TotalValue>
              )}
            </TotalArea>
            <ButtonCheckout disabled={loadingCart}>
              <ButtonText>Continue</ButtonText>
            </ButtonCheckout>
          </CheckoutArea>
        </>
      )}
    </Container>
  );
}
