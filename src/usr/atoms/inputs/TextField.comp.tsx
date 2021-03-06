import React from 'react';
import PropTypes from 'prop-types';
import { TextField as TextFieldOF } from '@fluentui/react';
import pickWithValues from "usr/a_lib/utils/pickWithValues";

export interface TextFieldProps {
    label?: string;
    value?: string;
    onChange?: (newValue?: string) => void;
}

interface TextFieldState {
  valueLocal?: string;
}

/**
 * Button is generated by Webcodesk. Replace this comment with a valuable description.
 */
class TextField extends React.Component<TextFieldProps, TextFieldState> {

    static propTypes: PropTypes.InferProps<TextFieldProps> = {
        /**
         * Label displayed above the text field (and read by screen readers).
         */
        label: PropTypes.string,
        /**
         * Current value of the text field. Only provide this if the text field is a controlled component where you are maintaining its current state; otherwise, use the defaultValue property.
         */
        value: PropTypes.string,
        /**
         * Callback for when the input value changes. This is called on both input and change events.
         */
        onChange: PropTypes.func,
    };

    static defaultProps: TextFieldProps = {
      label: 'Text Field',
      value: 'Text',
    };

    constructor(props: TextFieldProps) {
      super(props);
      this.state = {
        valueLocal: this.props.value,
      };
    }

    componentDidUpdate(prevProps: Readonly<TextFieldProps>, prevState: Readonly<TextFieldState>): void {
      if (prevProps.value !== this.props.value) {
        this.setState({
          valueLocal: this.props.value,
        });
      }
    }

  handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.props.onChange) {
            this.props.onChange(newValue);
        }
        this.setState({ valueLocal: newValue });
    };

    render() {
        const { label } = this.props;
        const { valueLocal } = this.state;
        const properties = pickWithValues({ label, value: valueLocal });
        return (
            <TextFieldOF
                {...properties}
                onChange={this.handleChange}
            />
        );
    }
}

export default TextField;
