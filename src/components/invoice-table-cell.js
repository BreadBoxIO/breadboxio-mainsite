import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export class InvoiceTableCell extends Component {
    getClassNames = () => {
        const { heading, spacer, className } = this.props;

        return classNames(className, {
            'invoice-table__table-cell': true,
            'invoice-table__heading__cell': heading,
            'invoice-table__spacer': spacer
        });
    }

    render = () => {
        const { flex, children, style } = this.props;
        const styles = Object.assign({}, style, { flex });

        return (
            <div className={this.getClassNames()} style={styles}>{children}</div>
        );
    }
}

InvoiceTableCell.defaultProps = {
    children: null,
    className: '',
    flex: 1,
    heading: false,
    spacer: false,
    style: null
};

InvoiceTableCell.propTypes = {
    children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]),
    className: PropTypes.string,
    flex: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    heading: PropTypes.bool,
    spacer: PropTypes.bool,
    style: PropTypes.object
};
