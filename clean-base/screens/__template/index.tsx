/**
 * Declare screen props
 */
interface IScreenProps {
  name: string;
}

export const TemplateScreen: IComponent<IScreenProps> = ({ name }) => (
  <div className="flex flex-auto vh-100 w-100 justify-center items-center">
    <h1 className="o-50">Hello {name}</h1>
  </div>
);
