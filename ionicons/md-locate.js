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
        _react2.default.createElement('path', { d: 'M256 176c-44.004 0-80 36-80 80 0 44.004 35.996 80 80 80 44.005 0 80-35.996 80-80 0-44-35.995-80-80-80zm190.938 58.667c-9.605-88.53-81.074-160-169.605-169.6V32h-42.666v33.067c-88.53 9.6-160 81.068-169.604 169.6H32v42.666h33.062c9.604 88.53 81.072 160 169.604 169.604V480h42.666v-33.062c88.53-9.604 160-81.073 169.605-169.604H480v-42.667h-33.062zM256 405.333c-82.137 0-149.334-67.198-149.334-149.333 0-82.136 67.197-149.333 149.334-149.333 82.135 0 149.332 67.198 149.332 149.333S338.135 405.333 256 405.333z' })
      )
    )
  );
};

exports.default = Icon;