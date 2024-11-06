import React from "react";

class TypeWriter extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };

        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.unmounted = false;
        this.loopNum = 0;
        this.period = 100000;
        this.isDeleting = false;
        this.tick();
    }

    componentWillUnmount() {
        this.unmounted = true;
    }

    tick() {
        if (this.unmounted) {
            return;
        }

        const { data: toRotate } = this.props;
        const i = this.loopNum % toRotate.length;
        const fullTxt = toRotate[i];

        let newText = "";
        if (this.isDeleting) {
            newText = fullTxt.substring(0, this.state.text.length - 1);
        } else {
            newText = fullTxt.substring(0, this.state.text.length + 1);
        }

        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        this.setState({ text: newText });

        setTimeout(() => {
            this.tick();
        }, delta);
    }

    render() {
        return <h3 className="typewriter text-white">{this.state.text}</h3>;
    }
}

export default TypeWriter;
