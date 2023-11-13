import { useFormContext } from 'react-hook-form'
import { Card } from '../../../../components/Card'
import location from '../../../../assets/location.svg'
import {
  BaseInput,
  CardHeader,
  FormGrid,
  InputPaymentContainer,
  InputWrapper,
  PaymentContainer,
  PaymentTypeError,
} from './styles'
import { Bank, CreditCard, Money } from 'phosphor-react'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, watch, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  const watchPagamento = watch('tipoPagamento')
  return (
    <div>
      <h2>Complete seu pedido</h2>
      <Card>
        <CardHeader>
          <img src={location} alt="localização" />
          <div>
            <h3>Endereço de entrega</h3>
            <h4>Informe o endereço onde deseja receber seu pedido</h4>
          </div>
        </CardHeader>
        <FormGrid>
          <InputWrapper className="cep">
            {' '}
            <BaseInput
              type="text"
              id="cep"
              {...register('cep')}
              placeholder="CEP"
            />
            {errors.cep && <p>{errors.cep?.message}</p>}
          </InputWrapper>
          <InputWrapper className="rua">
            <BaseInput
              type="text"
              id="rua"
              {...register('rua')}
              placeholder="Rua"
            />
            {errors.rua && <p>{errors.rua?.message}</p>}
          </InputWrapper>
          <InputWrapper className="numero">
            <BaseInput
              type="number"
              id="numero"
              {...register('numero')}
              placeholder="Número"
            />
            {errors.numero && <p>{errors.numero?.message}</p>}
          </InputWrapper>
          <InputWrapper className="complemento">
            <BaseInput
              type="text"
              id="complemento"
              {...register('complemento')}
              placeholder="Complemento"
            />
            {errors.complemento && <p>{errors.complemento?.message}</p>}
          </InputWrapper>
          <InputWrapper className="bairro">
            <BaseInput
              type="text"
              id="bairro"
              {...register('bairro')}
              placeholder="Bairro"
            />
            {errors.bairro && <p>{errors.bairro?.message}</p>}
          </InputWrapper>
          <InputWrapper>
            <BaseInput
              type="text"
              {...register('cidade')}
              placeholder="Cidade"
            />
            {errors.cidade && <p>{errors.cidade?.message}</p>}
          </InputWrapper>
          <InputWrapper>
            <BaseInput
              type="text"
              id="uf"
              {...register('uf')}
              placeholder="UF"
            />
            {errors.uf && <p>{errors.uf?.message}</p>}
          </InputWrapper>
        </FormGrid>
      </Card>
      <Card>
        <CardHeader>
          <img src={location} alt="localização" />
          <div>
            <h3>Pagamento</h3>
            <h4>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </h4>
          </div>
        </CardHeader>
        <PaymentContainer>
          <InputPaymentContainer $isSelected={watchPagamento === 'crédito'}>
            <input
              type="radio"
              id="crédito"
              className="crédito"
              value="crédito"
              {...register('tipoPagamento')}
            />

            <label htmlFor="crédito">
              <CreditCard size={16} /> Cartão de crédito
            </label>
          </InputPaymentContainer>

          <InputPaymentContainer $isSelected={watchPagamento === 'débito'}>
            <input
              type="radio"
              id="débito"
              className="débito"
              value="débito"
              {...register('tipoPagamento')}
            />

            <label htmlFor="débito">
              <Bank size={16} /> Cartão de débito
            </label>
          </InputPaymentContainer>

          <InputPaymentContainer $isSelected={watchPagamento === 'dinheiro'}>
            <input
              type="radio"
              id="dinheiro"
              value="dinheiro"
              {...register('tipoPagamento')}
            />

            <label htmlFor="dinheiro">
              <Money size={16} /> Dinheiro
            </label>
          </InputPaymentContainer>
        </PaymentContainer>
        {errors.tipoPagamento && (
          <PaymentTypeError>{errors.tipoPagamento.message}</PaymentTypeError>
        )}
      </Card>
    </div>
  )
}
