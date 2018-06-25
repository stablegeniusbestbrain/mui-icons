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
        _react2.default.createElement('path', { d: 'M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm48 64c18.7 0 30.9 10.3 34.1 29.1 1.9 11.1-.6 26.6-3.5 34.9H352c16.5 0 30.3 4.1 38.9 18.4C397 204.8 400 218 400 244h-16c0-28-3.8-36.1-6.9-41.4-5.7-9.7-14.2-10.6-25.1-10.6h-29.5c-2.8 0-5.5-1.6-6.9-3.9-1.4-2.4-1.5-5.4-.1-7.9.1-.2 9.4-21.8 6.9-36.3-1.3-7.6-2.4-15.8-18.4-15.8-4.4 0-8-3.6-8-8s3.6-8.1 8-8.1zm-32-16c4.4 0 8 3.6 8 8s-3.6 8-8 8c-1 0-17.9 1.7-17.9 27.5 0 11 5 18.6 15.6 23.1 8.9 3.8 18.2 3.9 18.3 3.9 2.9.1 5.6 1.7 7 4.3 1.4 2.6 1.2 5.8-.4 8.2-4.7 7.1-6.5 17.7-3.7 21.9 4.1 6 7.3 7.2 20 7.1h3.6c23.6 0 36.9.6 45.7 4.7 16 7.4 15.8 23.1 15.8 30.2v1.1h-16v-1.1c0-8.2-1-13-6.7-15.7-4.3-2-12.7-3.2-39-3.2h-3.5c-13 0-24.3.2-33.3-13.1-5.3-7.8-5-20-1.7-29.8-3.6-.7-7.8-1.9-12-3.6-16.7-7-25.7-20.5-25.7-38C238.1 106.8 260 96 272 96zm104 160v48h-16v-48h16zm-24 0v48h-20l-48-48h68zm-240 48v-48h117l48 48H112zm279.8 87.8c-1.9 1.9-3.8 3.7-5.8 5.5L114.7 126a150.67 150.67 0 0 1 11.3-11.3L397.3 386c-1.8 1.9-3.6 3.9-5.5 5.8zM400 304h-16v-48h16v48zm0-60s0-.1 0 0zm0 0c0-.1 0 0 0 0z' })
      )
    )
  );
};

exports.default = Icon;