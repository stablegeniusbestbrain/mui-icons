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
        _react2.default.createElement('path', { d: 'M405.34 405.332H106.66V106.668H240V64H106.66C83.19 64 64 83.197 64 106.668v298.664C64 428.802 83.19 448 106.66 448h298.68c23.47 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L160 322.133 189.864 352 405.34 136.53V224H448V64H288z' })
      )
    )
  );
};

exports.default = Icon;