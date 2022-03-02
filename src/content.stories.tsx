import { Content } from './content'

export const Default: React.FC = () => <Content value="Hello world!" />

export const Placeholder: React.FC = () => (
  <Content placeholder="This is a placeholder..." value="" />
)

export default {
  title: 'Content Editable'
}
