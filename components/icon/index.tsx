// Utils
import * as React from 'react';
import classnames from 'classnames';
import * as RIcons from '@ant-design/icons';
import { createNS, withDefaultProps, addUnit } from '../utils';

import { View } from './style';

// Components
// import Info from '../info';

// Types
export type IconProps = {
    dot?: boolean;
    tag: keyof HTMLElementTagNameMap | string;
    name: string;
    size?: string | number;
    info?: string | number;
    badge?: string | number;
    color?: string;
    classPrefix: string;
    children?: React.ReactNode;
    onClick?(event: React.MouseEvent<HTMLElement>): void;
};

const [bem] = createNS('icon');

const defaultProps = {
    classPrefix: bem(),
    size: 20,
};

function isImage(name?: string): boolean {
    return name ? name.indexOf('/') !== -1 : false;
}

const Icon: React.FC<React.PropsWithChildren<IconProps>> = (props: IconProps) => {
    const name = props.name;
    const imageIcon = isImage(name);

    const C = (RIcons as any)[name];

    if (!imageIcon && !C) return <></>;

    return (
        <View
            className={classnames([
                props.classPrefix,
                imageIcon ? '' : `${props.classPrefix}-${name}`,
            ])}
            style={{
                color: props.color,
                fontSize: addUnit(props.size),
            }}
            onClick={props.onClick}
        >
            {props.children}
            {imageIcon ? <img className={bem('image')} src={name} /> : <C />}
            {/* Todo
                miss info */}
            {/* <Info
                dot={props.dot}
                info={isDef(props.badge) ? props.badge : props.info}
            /> */}
        </View>
    );
};

export default withDefaultProps(React.memo(Icon), defaultProps);
