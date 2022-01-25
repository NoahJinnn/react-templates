import { TemplateScreen } from '@screens/__template';

interface ITemplatePageProps {
  name: string;
}

const TemplatePage: IComponent<ITemplatePageProps> = ({ name = 'Halocom' }) => (
  <TemplateScreen name={name} />
);

export default TemplatePage;
