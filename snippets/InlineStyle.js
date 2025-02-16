const InlineStyle = ({ children }) => (
  <style dangerouslySetInnerHTML={{ __html: children }} />
);

export default InlineStyle;
