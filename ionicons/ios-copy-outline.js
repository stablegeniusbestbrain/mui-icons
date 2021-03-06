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
        _react2.default.createElement('path', { d: 'M304 96h-16v80h80v-16h-64z' }),
        _react2.default.createElement('path', { d: 'M325.3 64H160v48h-48v336h240v-48h48V139l-74.7-75zM336 432H128V128h32v272h176v32zm48-48H176V80h142.7l65.3 65.6V384z' })
      )
    )
  );
};

exports.default = Icon;