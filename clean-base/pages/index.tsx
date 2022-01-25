import { TemplateScreen } from '@screens/__template';

interface ITemplatePageProps {
  name: string;
}

const TemplatePage: IComponent<ITemplatePageProps> = ({ name = 'World' }) => (
  <TemplateScreen name={name} />
);

export default TemplatePage;
