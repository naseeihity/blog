import React from 'react';
import Lowlight from 'react-lowlight';
import js from 'highlight.js/lib/languages/javascript';

Lowlight.registerLanguage('js', js);

class CodeBlock extends React.PureComponent {
  render() {
    return (
      <Lowlight
        language={this.props.language || 'js'}
        value={this.props.literal}
        inline={this.props.inline}
      />
    );
  }
}

export default CodeBlock;
