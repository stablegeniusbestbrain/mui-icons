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
        _react2.default.createElement('path', { d: 'M112 48v368h16V64h304v369.1c0 8.2-6.7 14.9-14.9 14.9H94.9c-8.2 0-14.9-6.7-14.9-14.9V128h16v-16H64v321.1c0 17 13.8 30.9 30.9 30.9h322.3c17 0 30.9-13.8 30.9-30.9V48H112z' }),
        _react2.default.createElement('path', { d: 'M160 112h128v16H160zm0 80h240v16H160zm0 80h192v16H160zm0 80h240v16H160z' })
      )
    )
  );
};

exports.default = Icon;