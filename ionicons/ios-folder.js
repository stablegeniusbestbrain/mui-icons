'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M472 176H40c-4.41 0-8 3.59-8 8v239c0 13.317 11.683 25 25 25h400c12.683 0 23-11.215 23-25V184c0-4.41-3.59-8-8-8zm-15-80H215c-2.79 0-4.27-.585-6.094-2.408l-22.5-22.5-.17-.163C181.367 66.332 177.362 64 169 64H57c-13.785 0-25 10.317-25 23v74.376A23.885 23.885 0 0 1 40 160h432c2.805 0 5.496.488 8 1.376V119c0-13.327-9.673-23-23-23z' })
      )
    )
  );
};

exports.default = Icon;