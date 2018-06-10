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
        _react2.default.createElement('path', { d: 'M368.5 128h-225L80 224v160h352V224l-63.5-96zm44.9 96H368v-68l45.4 68zM160 144h192v80h-48c0 26.5-21.5 48-48 48s-48-21.5-48-48h-48v-80zm-16 12v68H98.6l45.4-68zm272 212H96V240h98c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48h98v128z' })
      )
    )
  );
};

exports.default = Icon;