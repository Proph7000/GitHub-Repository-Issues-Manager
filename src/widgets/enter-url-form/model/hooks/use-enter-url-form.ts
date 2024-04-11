import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

interface IEnterUrlForm {
  url: string
}

const regex = /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/issues$/

export function useEnterUrlForm() {
  const schema: yup.ObjectSchema<IEnterUrlForm> = yup.object({
    url: yup
      .string()
      .required()
      .test({
        test: (value) => regex.test(value),
        message:
          'The URL should point to the issues in the specified repository',
      }),
  })

  const form = useForm<IEnterUrlForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      url: '',
    },
  })

  return form
}
