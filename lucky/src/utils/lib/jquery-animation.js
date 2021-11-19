/* eslint-disable */
!(function (a, b, c, d) {
    function e(a, b, c) {
        (this.elements = a), (this.animations = b), (this.options = c);
    }
    function f(b, c, d) {
        (this.taskId = J++),
            (this.element = a(b)),
            (this.options = c),
            (this.options.element = this.element),
            (this.options.originalElement = this.element),
            (this.jobsOptions = d),
            (this.reset = !0),
            (this.started = !1),
            (this.counter = { complete: 0, fail: 0, always: 0 });
    }
    function g(b, c) {
        (this.element = a(b)),
            (this.options = c),
            (this.updateAnimations = {}),
            this.prepare(),
            (this.counter = { complete: 0, fail: 0, always: 0, start: 0 });
    }
    function h(a, b) {
        switch (((a = a || 'normal'), (b = b || 'normal'), L[a] * L[b])) {
            case -2:
            case -4:
                return 'alternate-reverse';
            case -1:
                return 'reverse';
            case 2:
                return 'alternate';
            case 1:
                return 'normal';
            default:
                return a;
        }
    }
    function i() {
        for (var a = [], b = new Date().getTime(), c = 0; c < K.length; ++c) {
            var d = K[c],
                e = d.attr('animation-deadline');
            if (e) {
                for (var f = e.split(','), g = [], h = 0; h < f.length; ++h)
                    (e = parseInt(f[h])),
                        b > e ? d.trigger('animationfail') : g.push(e);
                0 == g.length
                    ? d.removeAttr('animation-deadline')
                    : (d.attr('animation-deadline', g.join(',')), a.push(d));
            }
        }
        K = a;
    }
    function j(a, b) {
        var c = a.attr('animation-deadline');
        c && (b = c + ',' + b), a.attr('animation-deadline', b), K.push(a);
    }
    function k(a) {
        a.removeAttr('animation-deadline');
    }
    function l(a) {
        return (
            !a.wrap &&
            !a.emptyAnimation &&
            m(a.start) &&
            m(a.complete) &&
            m(a.always) &&
            m(a.fail) &&
            m(a.end) &&
            m(a.clear) &&
            m(a.reset)
        );
    }
    function m(b) {
        if (!a.isArray(b)) return !a.isFunction(b);
        for (var c = 0; c < b.length; ++c) if (!m(b[c])) return !1;
        return !0;
    }
    function n(b, c, d) {
        a.isArray(b) || (b = [b]);
        for (var e = 0; e < b.length; ++e)
            a.isFunction(b[e])
                ? b[e].apply(c, d)
                : a.isArray(b[e]) && n(b[e], c, d);
    }
    function o(b) {
        var c = a('<span></span>');
        return p(b, c), b.wrap(c), b.parent();
    }
    function p(a, b) {
        if (b.attr('animation-display'))
            b.css('display', b.attr('animation-display'));
        else {
            var c = a.attr('animation-display') || a.css('display');
            a.attr('animation-display', c),
                'inline' == c && (c = G ? 'inline-flex' : 'inline-block'),
                b.css('display', c);
        }
        b.attr('animation-wrapper', 1),
            'none' != a.css('float') && b.css('float', a.css('float'));
        var d = {
            'margin-left': a.css('margin-left'),
            'margin-right': a.css('margin-right'),
            'margin-top': a.css('margin-top'),
            'margin-bottom': a.css('margin-bottom'),
            width: a.outerWidth(),
            height: a.outerHeight(),
        };
        if (H) {
            var e = a[0].getBoundingClientRect();
            a.css('margin', 0);
            var f = a[0].getBoundingClientRect();
            '0px' == d['margin-left'] && (d['margin-left'] = e.left - f.left);
        }
        a.css({ width: a.width(), height: a.height(), margin: 0 }),
            b.css(d),
            a.attr('animation-wrapper') ||
                a.children().first().css('margin-top', 0),
            'static' != a.css('position') &&
                (b.css('position', a.css('position')),
                b.css('z-index', a.css('z-index')),
                b.css('left', a.css('left')),
                b.css('right', a.css('right')),
                b.css('top', a.css('top')),
                b.css('bottom', a.css('bottom')),
                a.css('position', 'relative'),
                a.css('left', '0'),
                a.css('top', '0'),
                a.css('right', ''),
                a.css('bottom', ''));
    }
    function q(b, c) {
        if ((b = a(b)[0])) {
            for (var d = {}, e = 0; e < c.length; ++e) d[c[e]] = b.style[c[e]];
            return d;
        }
    }
    function r(b, c) {
        if ((b = a(b)[0])) for (var d in c) b.style[d] = c[d];
    }
    function s(a, b) {
        var c = u(a);
        c.push(b), a.attr('animation-tasksIds', c.join(','));
    }
    function t(a, b) {
        var c = u(a).filter(function (a) {
                return a != b;
            }),
            d = c.join(',');
        d
            ? a.attr('animation-tasksIds', d)
            : a.removeAttr('animation-tasksIds');
    }
    function u(a) {
        var b = a.attr('animation-tasksIds');
        return b ? b.split(',') : [];
    }
    function v(a) {
        return w('', a) + w(E, a);
    }
    function w(a, b) {
        var c = '@';
        c += a + 'keyframes ' + b.name + '{';
        for (var d in b.keyframes) {
            var e = b.keyframes[d];
            c += d + '{';
            for (var f in e) {
                var g = e[f];
                if ('string' == typeof g)
                    for (var h in b.variables) {
                        var i = new RegExp('\\${' + h + '}', 'g');
                        g = g.replace(i, b.variables[h]);
                    }
                (c += f + ':' + g + ';'), (c += a + f + ':' + g + ';');
            }
            c += '}';
        }
        return (c += '}');
    }
    function x(b, c) {
        var d = v({ name: b, keyframes: c });
        a('head').append(a('<style></style>').append(d));
    }
    function y(b, c) {
        var d = [];
        b = b.split(' ');
        for (var f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g) {
                var h = a.animations[g];
                h || (h = { name: g }), (h.id = g), d.push(h);
            }
        }
        new e(this, d, c || {}).start();
    }
    function z(b) {
        var c = a.extend({}, b);
        return (
            M.forEach(function (a) {
                delete c[a];
            }),
            c
        );
    }
    function A() {
        Q && (clearTimeout(Q), (Q = null)),
            (Q = setTimeout(function () {
                a('[animation-wrapper]').css({
                    display: '',
                    width: '',
                    height: '',
                    float: '',
                    position: '',
                    margin: '',
                });
                var b = [],
                    c = {};
                a('[animation-tasksIds]').each(function () {
                    for (var d = a(this), e = u(d), f = 0; f < e.length; ++f) {
                        var g = e[f];
                        c[g] || ((c[g] = !0), b.push({ id: g, element: d }));
                    }
                }),
                    (b = b.sort(function (a, b) {
                        return a.id - b.id;
                    }));
                for (var d = 0; d < b.length; ++d)
                    b[d].element.trigger('animationresize');
            }, a.resizeDebouncing));
    }
    var B = 'animationstart webkitAnimationStart oAnimationStart',
        C = 'animationend webkitAnimationEnd oAnimationEnd',
        D = 'animationiteration webkitAnimationIteration oAnimationIteration',
        E = '';
    a(['WebkitTransform', 'MozTransform', 'msTransform', 'OTransform']).each(
        function (a, b) {
            b in c.documentElement.style &&
                (E = ['-webkit-', '-moz-', '-ms-', '-o-'][a]);
        },
    );
    var F = c.createElement('DIV');
    F.style.display = 'inline-flex';
    var G = 'inline-flex' == F.style.display;
    F = null;
    var H = -1 != navigator.userAgent.toLowerCase().indexOf('firefox'),
        I = 0,
        J = 0,
        K = [];
    (e.prototype.start = function () {
        this.prepare(),
            0 == this.jobsOptions.length
                ? this.shortcuts.length > 0 &&
                  ((this.shortcuts[0].prepare = [
                      this.taskOptions.prepare,
                      this.shortcuts[0].prepare,
                  ]),
                  (this.shortcuts[0].start = [
                      this.taskOptions.start,
                      this.shortcuts[0].start,
                  ]),
                  (this.shortcuts[0].complete = [
                      this.taskOptions.complete,
                      this.shortcuts[0].complete,
                  ]),
                  (this.shortcuts[0].always = [
                      this.taskOptions.always,
                      this.shortcuts[0].always,
                  ]),
                  (this.shortcuts[0].fail = [
                      this.taskOptions.fail,
                      this.shortcuts[0].fail,
                  ]),
                  (this.shortcuts[0].end = [
                      this.taskOptions.end,
                      this.shortcuts[0].end,
                  ]),
                  (this.shortcuts[0].clear = [
                      this.taskOptions.clear,
                      this.shortcuts[0].clear,
                  ]))
                : this.elements.each(
                      function (a, b) {
                          new f(b, this.taskOptions, this.jobsOptions).start();
                      }.bind(this),
                  );
        for (var a = 0; a < this.shortcuts.length; ++a)
            y.call(
                this.elements,
                this.shortcuts[a].shortcut,
                this.shortcuts[a],
            );
    }),
        (e.prototype.prepare = function () {
            (this.taskOptions = a.extend({}, this.options)),
                delete this.taskOptions.prepare,
                delete this.taskOptions.start,
                delete this.taskOptions.complete,
                delete this.taskOptions.always,
                delete this.taskOptions.fail,
                delete this.taskOptions.end,
                delete this.taskOptions.clear,
                (this.jobsOptions = []),
                (this.shortcuts = []);
            for (
                var b = this.taskOptions.custom || {}, c = 0;
                c < this.animations.length;
                ++c
            ) {
                var e,
                    f = this.animations[c];
                if (f.shortcut)
                    (e = a.extend({}, this.taskOptions, f, b[f.id])),
                        (this.taskOptions.combinable = !0),
                        (e.combinable = !0),
                        (e.shortcut = f.shortcut),
                        this.shortcuts.push(e);
                else {
                    (e = a.extend({}, this.taskOptions, b[f.id])),
                        (e.id = f.id),
                        (e.duration = e.duration || f.duration || 400),
                        (e.direction = h(f.direction, e.direction)),
                        (e.easing = e.easing || f.easing || 'ease'),
                        (e.delay = e.delay || f.delay || 0),
                        (e.repeat = e.repeat || f.repeat || 1),
                        (e.fillMode = e.fillMode || f.fillMode || 'none'),
                        (e.timeout = e.timeout || f.timeout || 500),
                        (e.prepare = [e.prepare, f.prepare]),
                        (e.start = [e.start, f.start]),
                        (e.complete = [f.complete, e.complete]),
                        (e.always = [f.always, e.always]),
                        (e.fail = [f.fail, e.fail]),
                        (e.end = [f.end, e.end]),
                        (e.clear = [f.clear, e.clear]),
                        (e.resize = f.resize),
                        (e.name = f.name),
                        (e.keyframes = f.keyframes),
                        (e.emptyAnimation = f.emptyAnimation),
                        (e.wrap = f.wrap || e.wrap),
                        (e.variables = {});
                    for (var g in f.variables)
                        (e.variables[g] = e[g]),
                            e[g] === d && (e.variables[g] = f.variables[g]);
                    this.jobsOptions.push(e);
                }
            }
            (this.taskOptions.prepare = this.options.prepare),
                (this.taskOptions.start = this.options.start),
                (this.taskOptions.complete = this.options.complete),
                (this.taskOptions.always = this.options.always),
                (this.taskOptions.fail = this.options.fail),
                (this.taskOptions.end = this.options.end),
                (this.taskOptions.clear = this.options.clear),
                this.taskOptions.autoWrap === d &&
                    (this.taskOptions.autoWrap = !0);
        }),
        (f.prototype.start = function () {
            this.element.reset(), this.combine();
            var b = parseInt(this.element.attr('animation-tasks')) || 0;
            0 == b && (this.cleaner = !0),
                this.element.attr('animation-tasks', b + 1),
                s(this.element, this.taskId),
                this.options.derivative ||
                    this.element.attr('animation-wrapper') ||
                    ((this.styleState = a.saveStyle(this.element, [
                        'marginLeft',
                        'marginRight',
                        'marginTop',
                        'marginBottom',
                        'width',
                        'height',
                        'display',
                        'position',
                        'top',
                        'right',
                        'bottom',
                        'left',
                    ])),
                    (this.styleState2 = a.saveStyle(
                        this.element.children().first(),
                        ['marginTop'],
                    ))),
                (this.ontasksend = this.ontasksend.bind(this)),
                (this.onstart = this.onstart.bind(this)),
                (this.oncancel = this.oncancel.bind(this)),
                (this.onfinish = this.onfinish.bind(this)),
                (this.onresize = this.onresize.bind(this)),
                (this.onremove = this.onremove.bind(this)),
                this.element.on('animationtasksend', this.ontasksend),
                this.element.on('animationcancel', this.oncancel),
                this.element.on('animationfinish', this.onfinish),
                this.element.on('animationresize', this.onresize),
                this.element.on('remove', this.onremove),
                n(this.options.prepare, this.element[0], [this.options]),
                (this.actor = this.element),
                (this.jobs = []),
                this.jobsOptions.sort(function (a, b) {
                    return a.wrap ? -1 : b.wrap ? 1 : 0;
                }),
                this.options.autoWrap || this.combineOptions();
            for (var c = '', d = 0; d < this.jobsOptions.length; ++d) {
                var e = a.extend({}, this.jobsOptions[d]),
                    f = [];
                if (this.options.combinable || d > 0) {
                    var h = this.actor;
                    (this.actor = o(this.actor)),
                        f.push({ element: h, wrapper: this.actor });
                }
                ('forwards' == e.fillMode || 'both' == e.fillMode) &&
                    (this.reset = !1),
                    e.wrap &&
                        ((e.wrapper = o(this.actor)),
                        f.push({ element: this.actor, wrapper: e.wrapper }));
                for (var i = e.combinedJobs || [e], j = 0; j < i.length; ++j) {
                    var k = i[j];
                    (k.variables = a.extend({}, k.variables)),
                        n(k.prepare, this.actor[0], [k]),
                        k.keyframes &&
                            ((k.name = 'a' + ++I),
                            (k.keyframeCss = v({
                                name: k.name,
                                keyframes: k.keyframes,
                                variables: k.variables,
                            })),
                            (c += k.keyframeCss));
                }
                (e.start = [e.start, this.onstart.bind(this)]),
                    (e.complete = [e.complete, this.oncomplete.bind(this)]),
                    (e.fail = [e.fail, this.onfail.bind(this)]),
                    (e.always = [e.always, this.onalways.bind(this)]),
                    (e.originalElement = this.element),
                    (e.element = this.actor);
                var l = new g(this.actor, e);
                (l.logs = f),
                    this.jobs.push(l),
                    e.wrap && (this.actor = e.wrapper);
            }
            c &&
                ((this.style = a('<style></style>')),
                this.style.html(c),
                a('head').append(this.style));
            for (var d = 0; d < this.jobs.length; ++d) this.jobs[d].start();
            this.actor.find('[animation-prepare]').each(function () {
                var b = a(this);
                b.vendorCss('animation', b.attr('animation-prepare')),
                    b.removeAttr('animation-prepare');
            });
        }),
        (f.prototype.combine = function () {
            var a = this.element.attr('animation-tasks');
            if (!a)
                return void (
                    this.options.combinable &&
                    this.element.attr('animation-combinable', 1)
                );
            if (!this.options.combinable)
                return void this.element.trigger('animationcancel');
            var b = this.element.attr('animation-combinable');
            b ||
                (this.element.trigger('animationcancel'),
                this.element.attr('animation-combinable', 1));
        }),
        (f.prototype.combineOptions = function () {
            for (var a = [], b = [], c = 0; c < this.jobsOptions.length; ++c) {
                var d = this.jobsOptions[c];
                l(d) ? b.push(d) : a.push(d);
            }
            if (b.length > 0) {
                var e = b[0];
                (e.combinedJobs = b), a.push(e);
            }
            this.jobsOptions = a;
        }),
        (f.prototype.onresize = function (b) {
            b.stopPropagation(),
                this.options.derivative ||
                    (a.restoreStyle(this.element, this.styleState),
                    a.restoreStyle(
                        this.element.children().first(),
                        this.styleState2,
                    ));
            for (var c = !1, d = '', e = 0; e < this.jobs.length; ++e) {
                for (var f = this.jobs[e], g = 0; g < f.logs.length; ++g) {
                    var h = f.logs[g];
                    p(h.element, h.wrapper);
                }
                f.resize();
                for (var i = f.preparesOptions, g = 0; g < i.length; ++g) {
                    var j = i[g];
                    if (j.keyframes) {
                        var k = v({
                            name: j.name,
                            keyframes: j.keyframes,
                            variables: j.variables,
                        });
                        (d += k),
                            j.keyframeCss != k &&
                                (f.refresh(j.name),
                                (j.keyframeCss = k),
                                (c = !0));
                    }
                }
            }
            c && this.style && this.style.html(d);
        }),
        (f.prototype.onstart = function () {
            this.started ||
                ((this.started = !0),
                n(this.options.start, this.element[0], [this.options]));
        }),
        (f.prototype.oncomplete = function () {
            ++this.counter.complete;
        }),
        (f.prototype.onfail = function () {
            ++this.counter.fail;
        }),
        (f.prototype.onalways = function () {
            if ((++this.counter.always, this.isDone())) {
                this.counter.complete > 0 &&
                    n(this.options.complete, this.element[0], [this.options]),
                    this.counter.fail == this.counter.always &&
                        n(this.options.fail, this.element[0], [this.options]),
                    n(this.options.always, this.element[0], [this.options]);
                var a = parseInt(this.element.attr('animation-tasks'));
                1 != a || this.hasOtherTasks()
                    ? this.element.attr('animation-tasks', a - 1)
                    : (this.element.removeAttr('animation-tasks'),
                      this.element.trigger('animationtasksend'));
            }
        }),
        (f.prototype.ontasksend = function () {
            if (this.isDone()) {
                this.element.off('animationtasksend', this.onend),
                    this.element.off('animationcancel', this.oncancel),
                    this.element.off('animationfinish', this.onfinish),
                    this.element.removeAttr('animation-combinable'),
                    this.options.derivative ||
                    (!this.reset && this.counter.fail != this.counter.always)
                        ? (this.element.attr('animation-resetable', 1),
                          (this.onreset = this.onreset.bind(this)),
                          this.element.on(
                              'animationreset animationcancel animationfinish',
                              this.onreset,
                          ))
                        : this.clear();
                for (var a = 0; a < this.jobs.length; ++a) this.jobs[a].end();
                n(this.options.end, this.element[0], [this.options]);
            }
        }),
        (f.prototype.oncancel = function (a) {
            a.target != this.element[0] && a.stopPropagation();
        }),
        (f.prototype.onfinish = function (a) {
            a.target != this.element[0] && a.stopPropagation();
        }),
        (f.prototype.onreset = function (a) {
            a.stopPropagation(),
                a.target == this.element[0] &&
                    (this.element.off('animationreset', this.onreset),
                    this.element.off('animationcancel', this.onreset),
                    this.element.off('animationfinish', this.onreset),
                    this.element.removeAttr('animation-resetable'),
                    this.clear());
        }),
        (f.prototype.onremove = function () {
            this.style && this.style.remove();
        }),
        (f.prototype.isDone = function () {
            return this.counter.always == this.jobsOptions.length;
        }),
        (f.prototype.hasOtherTasks = function () {
            return this.element.find('[animation-tasks]').length > 0;
        }),
        (f.prototype.clear = function () {
            if (
                (this.element.off('animationresize', this.onresize),
                this.element.off('remove', this.onremove),
                t(this.element, this.taskId),
                this.element.removeAttr('animation-display'),
                this.element.vendorCss('animation', ''),
                this.style && this.style.remove(),
                this.cleaner)
            ) {
                for (var b = 0; b < this.jobs.length; ++b) this.jobs[b].clear();
                n(this.options.clear, this.element[0], [this.options]);
                for (
                    var c = this.actor;
                    1 == c.parent().attr('animation-wrapper');

                )
                    c = c.parent();
                if (c != this.element) {
                    for (
                        var d = this.element;
                        !d.parent().attr('animation-wrapper');

                    )
                        d = d.parent();
                    c.replaceWith(d);
                }
                a.restoreStyle(this.element, this.styleState),
                    a.restoreStyle(
                        this.element.children().first(),
                        this.styleState2,
                    );
            }
        }),
        (g.prototype.start = function () {
            var a = this.options,
                b = this.element;
            if (
                ((this.onstart = this.onstart.bind(this)),
                (this.onfail = this.onfail.bind(this)),
                (this.oncancel = this.oncancel.bind(this)),
                (this.onfinish = this.onfinish.bind(this)),
                b.on(B, this.onstart),
                b.on('animationfail', this.onfail),
                b.on('animationcancel', this.oncancel),
                b.on('animationfinish', this.onfinish),
                a.emptyAnimation)
            )
                for (var c = 0; c < this.preparesOptions.length; ++c) {
                    var d = this.preparesOptions[c];
                    this.startTimer = setTimeout(
                        this.execStart.bind(this),
                        d.delay,
                    );
                    var e = parseInt(d.repeat);
                    isNaN(e) ||
                        (this.endTimer = setTimeout(
                            function () {
                                this.finish(!0);
                            }.bind(this),
                            d.delay + d.duration * e,
                        ));
                }
            else {
                b.vendorCss('animation', b.attr('animation-prepare')),
                    b.removeAttr('animation-prepare'),
                    (this.onend = this.onend.bind(this)),
                    (this.oniteration = this.oniteration.bind(this)),
                    b.on(C, this.onend),
                    b.on(D, this.oniteration);
                for (var c = 0; c < this.preparesOptions.length; ++c)
                    j(
                        b,
                        new Date().getTime() +
                            this.preparesOptions[c].delay +
                            this.preparesOptions[c].timeout,
                    );
            }
        }),
        (g.prototype.prepare = function () {
            this.preparesOptions = this.options.combinedJobs || [this.options];
            for (var a = 0; a < this.preparesOptions.length; ++a)
                this.preparesOptions[a].remainingRepeat = this.preparesOptions[
                    a
                ].repeat;
            (this.combinedCount = this.preparesOptions.length),
                this.element.attr(
                    'animation-prepare',
                    this.generateAnimationCss(this.preparesOptions),
                );
        }),
        (g.prototype.generateAnimationCss = function (a) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                b.push(
                    [
                        d.name,
                        d.duration / 1e3 + 's',
                        d.easing,
                        d.delay / 1e3 + 's',
                        d.remainingRepeat,
                        d.direction,
                        d.fillMode,
                    ].join(' '),
                );
            }
            return b.join(',');
        }),
        (g.prototype.onstart = function (a) {
            a.stopPropagation(), this.execStart();
        }),
        (g.prototype.execStart = function () {
            ++this.counter.start,
                this.combinedCount == this.counter.start && k(this.element),
                n(this.options.start, this.element[0], [this.options]);
        }),
        (g.prototype.onfail = function (a) {
            a.stopPropagation(),
                ++this.counter.always,
                ++this.counter.fail,
                this.combinedCount == this.counter.always &&
                    this.finish(
                        this.counter.fail == this.counter.always ? !1 : !0,
                    );
        }),
        (g.prototype.oncancel = function () {
            this.finish(!1);
        }),
        (g.prototype.onend = function (a) {
            a.stopPropagation(),
                ++this.counter.always,
                ++this.counter.complete,
                this.combinedCount == this.counter.always && this.finish(!0);
        }),
        (g.prototype.oniteration = function (a) {
            a.stopPropagation();
            for (
                var b = a.originalEvent.animationName, c = [], d = 0;
                d < this.preparesOptions.length;
                ++d
            ) {
                var e = this.preparesOptions[d];
                e.name == b
                    ? 'infinite' != e.remainingRepeat && --e.remainingRepeat
                    : c.push(e);
            }
            if (this.updateAnimations[b]) {
                this.updateAnimations[b] = !1;
                var f = this.element;
                f.vendorCss('animation', this.generateAnimationCss(c)),
                    setTimeout(
                        function () {
                            f.vendorCss(
                                'animation',
                                this.generateAnimationCss(this.preparesOptions),
                            );
                        }.bind(this),
                        1,
                    );
            }
        }),
        (g.prototype.onfinish = function () {
            this.finish(!0);
        }),
        (g.prototype.finish = function (a) {
            var b = this.options,
                c = this.element;
            c.off(B, this.onstart),
                c.off(C, this.onend),
                c.off(D, this.oniteration),
                c.off('animationfail', this.onfail),
                c.off('animationcancel', this.oncancel),
                c.off('animationfinish', this.onfinish),
                this.startTimer && clearTimeout(this.startTimer),
                this.endTimer && clearTimeout(this.endTimer),
                n(a ? b.complete : b.fail, this.element[0], [b]),
                n(b.always, this.element[0], [this.options]);
        }),
        (g.prototype.end = function () {
            n(this.options.end, this.element[0], [this.options]);
        }),
        (g.prototype.clear = function () {
            n(this.options.clear, this.element[0], [this.options]);
        }),
        (g.prototype.resize = function () {
            n(this.options.resize, this.element[0], [this.options]);
        }),
        (g.prototype.refresh = function (a) {
            this.updateAnimations[a] = !0;
        });
    var L = { 'alternate-reverse': -2, reverse: -1, normal: 1, alternate: 2 },
        M = [
            'id',
            'prepare',
            'start',
            'complete',
            'always',
            'fail',
            'end',
            'clear',
            'resize',
            'reset',
            'name',
            'keyframes',
            'emptyAnimation',
            'wrap',
            'combinable',
            'wrapper',
            'element',
            'originalElement',
            'prepareOptions',
        ];
    (a.animations = {}),
        (a.wrap = o),
        (a.defineAnimation = x),
        (a.saveStyle = q),
        (a.restoreStyle = r),
        (a.cloneBasicOptions = z),
        (a.resizeDebouncing = 150);
    var N = a.fn.animate;
    a.fn.animate = function (b, c) {
        if ('string' == typeof b) y.call(this, b, c);
        else {
            if ('object' != typeof b || !b.keyframes)
                return N.apply(this, arguments);
            var d = a.cloneBasicOptions(b);
            delete d.direction, new e(this, [b], d).start();
        }
        return this;
    };
    var O = a.fn.stop;
    a.fn.stop = function () {
        return (
            0 == arguments.length && this.trigger('animationcancel'),
            O.apply(this, arguments)
        );
    };
    var P = a.fn.finish;
    (a.fn.finish = function () {
        return (
            0 == arguments.length && this.trigger('animationfinish'),
            P.apply(this, arguments)
        );
    }),
        (a.fn.reset = function () {
            return this.attr('animation-resetable')
                ? this.trigger('animationreset')
                : this;
        }),
        (a.fn.vendorCss = function (a, b) {
            return b === d
                ? this.css(E + a) || this.css(a)
                : (this.css(a, b), this.css(E + a, b));
        }),
        (a.event.special.remove = {
            remove: function (a) {
                a.handler && a.handler();
            },
        });
    var Q;
    a(b).resize(A);
    setInterval(i, 100);
})(jQuery, window, document),
    (function (a) {
        var b = {
            '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
            '40%': { transform: 'translateY(${strength1}px)' },
            '60%': { transform: 'translateY(${strength2}px)' },
        };
        a.animations.bounce = {
            duration: 1e3,
            keyframes: b,
            variables: { strength: 20 },
            prepare: function (b) {
                var c = b.variables.strength;
                a.isNumeric(b.variables.strength) || (c = 20),
                    (b.variables.strength1 = 2 * -c),
                    (b.variables.strength2 = -c);
            },
        };
    })(jQuery, window, document),
    (function (a) {
        a.defineAnimation('fadeIn', {
            from: { opacity: 0 },
            to: { opacity: 1 },
        });
        var b = { name: 'fadeIn', duration: 1e3, easing: 'linear' };
        (a.animations.fadeIn = b),
            (a.animations.fadeOut = a.extend({ direction: 'reverse' }, b));
    })(jQuery, window, document),
    (function (a) {
        var b = {
                from: {
                    transform: 'rotate${axis}(${startDeg}deg)',
                    'transform-origin': '${startOrigin}',
                },
                to: {
                    transform: 'rotate${axis}(${endDeg}deg)',
                    'transform-origin': '${endOrigin}',
                },
            },
            c = {
                duration: 1e3,
                wrap: !0,
                keyframes: b,
                variables: {
                    startDeg: 0,
                    endDeg: 360,
                    startOrigin: '50% 50% 0',
                    endOrigin: '50% 50% 0',
                    perspective: 1e3,
                    perspectiveOrigin: '50% 50%',
                },
                prepare: function (b) {
                    (b.variables.axis = b.id.match(/flip(.*)$/)[1]),
                        a(this).vendorCss('transform-style', 'preserve-3d'),
                        b.wrapper.vendorCss(
                            'perspective',
                            b.variables.perspective,
                        ),
                        b.wrapper.vendorCss(
                            'perspective-origin',
                            b.variables.perspectiveOrigin,
                        );
                },
            };
        ['flipX', 'flipY'].forEach(function (b) {
            a.animations[b] = a.extend({}, c);
        });
    })(jQuery, window, document),
    (function (a, b, c) {
        function d() {
            (g = a(c).width()), (h = a(c).height());
        }
        var e = {
                from: { transform: 'translate(${x}px,${y}px)' },
                to: { transform: 'translate(0)' },
            },
            f = { duration: 1e3, keyframes: e };
        !(function () {
            function b(a, b) {
                switch (
                    ((a.variables.x = 0),
                    (a.variables.y = 0),
                    a.variables.direction)
                ) {
                    case 'up':
                        a.variables.y = -b || -h;
                        break;
                    case 'down':
                        a.variables.y = b || h;
                        break;
                    case 'left':
                        a.variables.x = -b || -g;
                        break;
                    case 'right':
                        a.variables.x = b || g;
                }
            }
            var c = a.extend({}, f, {
                variables: { distance: null },
                prepare: function (c) {
                    var d,
                        e = c.variables;
                    e.distance && a.isNumeric(e.distance)
                        ? (d = e.distance)
                        : (c.auto = !0),
                        (e.direction = c.id
                            .match(/(From|To)(.*)$/)[2]
                            .toLowerCase()),
                        b(c, d);
                },
                resize: function (a) {
                    a.auto && 1 != a.remainingRepeat && b(a, 0);
                },
            });
            [
                'flyFromUp',
                'flyFromDown',
                'flyFromRight',
                'flyFromLeft',
                'flyToUp',
                'flyToDown',
                'flyToRight',
                'flyToLeft',
            ].forEach(function (b) {
                (a.animations[b] = a.extend({}, c)),
                    -1 != b.indexOf('To') &&
                        (a.animations[b].direction = 'reverse');
            });
        })(),
            (function () {
                var b = a.extend({}, f, {
                    variables: { x: 0, y: 0, relative: !1 },
                    prepare: function (b) {
                        var c = b.variables,
                            d = a(this).position();
                        if (
                            (a.isNumeric(c.x) || (c.x = 0),
                            a.isNumeric(c.y) || (c.y = 0),
                            !c.relative)
                        ) {
                            var d = a(this).position();
                            (c.x -= d.left), (c.y -= d.top);
                        }
                    },
                });
                ['flyFrom', 'flyTo'].forEach(function (c) {
                    (a.animations[c] = a.extend({}, b)),
                        -1 != c.indexOf('To') &&
                            (a.animations[c].direction = 'reverse');
                });
            })(),
            (function () {
                function b(a) {
                    var b = a.variables.degree,
                        c = (b * Math.PI) / 180,
                        d = g,
                        e = h;
                    if (
                        (b > 180 && (e = -e),
                        b > 90 && 270 > b && (d = -d),
                        0 == b || 180 == b)
                    )
                        e = 0;
                    else if (90 == b || 270 == b) d = 0;
                    else {
                        var f = Math.cos(c),
                            i = Math.sin(c),
                            j = d / f,
                            k = e / i;
                        k > j ? (e = i * j) : (d = f * k);
                    }
                    (a.variables.x = d), (a.variables.y = -e);
                }
                var c = a.extend({}, f, {
                    variables: { degree: null },
                    prepare: function (c) {
                        a.isNumeric(c.variables.degree) ||
                            (c.variables.degree = 360 * Math.random()),
                            (c.variables.degree %= 360),
                            c.variables.degree < 0 &&
                                (c.variables.degree += 360),
                            b(c);
                    },
                    resize: function (a) {
                        1 != a.remainingRepeat && b(a);
                    },
                });
                ['flyIn', 'flyOut'].forEach(function (b) {
                    (a.animations[b] = a.extend({}, c)),
                        'flyOut' == b &&
                            (a.animations[b].direction = 'reverse');
                });
            })();
        var g, h;
        a(b).resize(d), a(c).ready(d);
    })(jQuery, window, document),
    (function (a) {
        var b = {
            from: {
                transform: 'rotate(${startDeg}deg)',
                'transform-origin': '${startOrigin}',
            },
            to: {
                transform: 'rotate(${endDeg}deg)',
                'transform-origin': '${endOrigin}',
            },
        };
        a.animations.rotate = {
            duration: 1e3,
            keyframes: b,
            variables: {
                startDeg: 0,
                endDeg: 360,
                startOrigin: '50% 50% 0',
                endOrigin: '50% 50% 0',
            },
        };
    })(jQuery, window, document),
    (function (a) {
        var b = {
            '0%, 100%': { transform: 'translateX(0)' },
            '10%, 30%, 50%, 70%, 90%': {
                transform: 'translateX(${strength1}px)',
            },
            '20%, 40%, 60%, 80%': { transform: 'translateX(${strength2}px)' },
        };
        a.animations.shake = {
            duration: 1e3,
            keyframes: b,
            variables: { strength: 10 },
            prepare: function (b) {
                var c = b.variables.strength;
                a.isNumeric(b.variables.strength) || (c = 10),
                    (b.variables.strength1 = -c),
                    (b.variables.strength2 = c);
            },
        };
    })(jQuery, window, document),
    (function (a) {
        function b(a, b, c) {
            var d = b.outerWidth(),
                e = b.outerHeight();
            switch (a.variables.direction) {
                case 'up':
                    (a.variables.axis = 'Y'), (a.variables.distance = -c || -e);
                    break;
                case 'down':
                    (a.variables.axis = 'Y'), (a.variables.distance = c || e);
                    break;
                case 'left':
                    (a.variables.axis = 'X'), (a.variables.distance = -c || -d);
                    break;
                case 'right':
                    (a.variables.axis = 'X'), (a.variables.distance = c || d);
            }
        }
        var c = {
                from: { transform: 'translate${axis}(${distance}px)' },
                to: { transform: 'translate${axis}(0)' },
            },
            d = {
                duration: 1e3,
                keyframes: c,
                wrap: !0,
                variables: { distance: null },
                prepare: function (c) {
                    var d,
                        e = c.variables;
                    e.distance && a.isNumeric(e.distance)
                        ? (d = e.distance)
                        : (c.auto = !0),
                        (c.variables.direction = c.id
                            .match(/(From|To)(.*)$/)[2]
                            .toLowerCase()),
                        b(c, a(this), d),
                        c.wrapper.css('overflow', 'hidden');
                },
                resize: function (c) {
                    c.auto && 1 != c.remainingRepeat && b(c, a(this), 0);
                },
            };
        [
            'slideFromUp',
            'slideFromDown',
            'slideFromRight',
            'slideFromLeft',
            'slideToUp',
            'slideToDown',
            'slideToRight',
            'slideToLeft',
        ].forEach(function (b) {
            (a.animations[b] = a.extend({}, d)),
                -1 != b.indexOf('To') &&
                    (a.animations[b].direction = 'reverse');
        });
    })(jQuery, window, document),
    (function (a) {
        var b = {
                from: { 'transform-origin': '${startOrigin}' },
                to: {
                    transform: 'scale(${x},${y})',
                    'transform-origin': '${endOrigin}',
                },
            },
            c = { duration: 1e3, keyframes: b };
        !(function () {
            var b = a.extend(
                {
                    variables: {
                        startOrigin: '50% 50% 0',
                        endOrigin: '50% 50% 0',
                    },
                    prepare: function (a) {
                        (a.variables.x = 0), (a.variables.y = 0);
                    },
                },
                c,
            );
            (a.animations.zoomAway = b),
                (a.animations.zoomNear = a.extend({ direction: 'reverse' }, b));
        })(),
            (function () {
                var b = a.extend(
                    {
                        variables: {
                            scale: 1.2,
                            startOrigin: '50% 50% 0',
                            endOrigin: '50% 50% 0',
                        },
                        prepare: function (a) {
                            (a.variables.x = a.variables.scale),
                                (a.variables.y = a.variables.scale);
                        },
                    },
                    c,
                );
                (a.animations.zoomIn = b),
                    (a.animations.zoomOut = a.extend(
                        { direction: 'reverse' },
                        b,
                    ));
            })(),
            (function () {
                var b = a.extend(
                    {
                        variables: {
                            x: 1,
                            y: 1,
                            startOrigin: '50% 50% 0',
                            endOrigin: '50% 50% 0',
                        },
                    },
                    c,
                );
                (a.animations.scaleTo = b),
                    (a.animations.scaleFrom = a.extend(
                        { direction: 'reverse' },
                        b,
                    ));
            })();
    })(jQuery, window, document);
