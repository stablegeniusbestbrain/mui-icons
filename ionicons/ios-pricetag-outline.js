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
        _react2.default.createElement('path', { d: 'M384 160c17.6 0 32-14.4 32-32s-14.4-32-32-32-32 14.4-32 32 14.4 32 32 32zm0-48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z' }),
        _react2.default.createElement('path', { d: 'M448 64v130.7L201.3 441.4 70.6 310.7 317.3 64H448m16-16H310.7L48 310.7 201.3 464 464 201.3V48z' })
      )
    )
  );
};

exports.default = Icon;