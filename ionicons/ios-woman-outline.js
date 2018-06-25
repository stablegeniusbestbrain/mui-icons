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
        _react2.default.createElement('path', { d: 'M286 496c-6.1 0-11.8-2.3-16-6.6-3.2-3.3-7.1-9.1-7.1-18.6V351.4H249v119.4c0 9.5-4 15.4-7.4 18.7-4.3 4.2-10.1 6.5-16.3 6.5-6.2 0-11.9-2.3-16.3-6.5-3.4-3.3-7.4-9.1-7.4-18.7V351.4h-43.9l44.5-170.6h-6.8L171 271.2c-4 13.1-13.7 17.8-21.4 17.8-6.6 0-12.9-3.2-17-8.7-4.8-6.4-6.1-14.9-3.6-23.9l29-104.1c4.2-15.2 20.7-38.2 48.7-39.3h98.4c28.4 1.2 44.1 26 48.5 38.9l.1.4 29 104.3c2.4 9 1 17.6-3.9 24-4.1 5.4-10.4 8.6-16.9 8.6-7.7 0-17.3-4.8-21.3-18.1v-.2l-24.3-90.1h-7.7l45.5 170.6H309v119.4c0 9.5-3.9 15.3-7.1 18.6-4.2 4.3-9.8 6.6-15.9 6.6zm-52.7-160.5h45.3v135.3c0 6.8 3.8 9.2 7.4 9.2s7.4-2.4 7.4-9.2V335.5h40.3l-45.5-170.6h40.3L356 266.6c1.2 4.2 3.5 6.6 6.1 6.6 1.6 0 3.3-.9 4.4-2.4 1.8-2.4 2.2-6 1.1-10.1l-28.9-103.9c-2.6-7.6-13.6-27-34-27.9h-97.4c-21.7 1-32.1 20.8-34 27.7l-28.9 104.1c-1.1 4.1-.8 7.6 1 9.9 1.1 1.5 2.8 2.4 4.5 2.4 2.7 0 5-2.3 6.3-6.4l27.4-101.7h39.3l-44.5 170.6h39.2v135.3c0 8.8 6.6 9.2 7.9 9.2 1.3 0 7.9-.4 7.9-9.2V335.5zm22.6-229.1c-24.2 0-43.9-20.3-43.9-45.2S231.7 16 255.9 16s43.9 20.3 43.9 45.2-19.7 45.2-43.9 45.2zm0-74.4c-15.5 0-28.2 13.1-28.2 29.2s12.6 29.2 28.2 29.2 28.2-13.1 28.2-29.2S271.5 32 255.9 32z' })
      )
    )
  );
};

exports.default = Icon;