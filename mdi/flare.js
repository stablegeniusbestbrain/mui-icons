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
      _react2.default.createElement('path', { d: 'M7 11H1v2h6v-2zm2.2-3.2L7 5.6 5.6 7l2.2 2.2 1.4-1.4zM13 1h-2v6h2V1zm5.4 6l-1.5-1.4-2.1 2.2 1.4 1.4L18.4 7zM17 11v2h6v-2h-6zm-5-2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm2.8 7.2l2.1 2.2 1.5-1.4-2.2-2.2-1.4 1.4zm-9.2.8l1.5 1.4 2.1-2.2-1.4-1.4L5.6 17zm5.4 6h2v-6h-2v6z' })
    )
  );
};

exports.default = Icon;