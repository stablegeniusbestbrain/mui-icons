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
        _react2.default.createElement('path', { d: 'M405.333 80h-87.35C310.88 52.396 285.82 32 256 32s-54.88 20.396-61.983 48h-87.35C83.197 80 64 99.198 64 122.667v314.665C64 460.802 83.198 480 106.667 480h298.666c23.47 0 42.667-19.2 42.667-42.668V122.667C448 99.197 428.802 80 405.333 80zM256 80c11.73 0 21.333 9.6 21.333 21.333S267.73 122.667 256 122.667s-21.333-9.6-21.333-21.334S244.27 80 256 80zm152 360H104V120h40v72h224v-72h40v320z' })
      )
    )
  );
};

exports.default = Icon;