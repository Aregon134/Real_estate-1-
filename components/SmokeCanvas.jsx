"use client";

import * as React from "react";
let r = `
precision mediump float;
uniform vec2 r;
uniform float t;
float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h(i), h(i + vec2(1.0, 0.0)), u.x), mix(h(i + vec2(0.0, 1.0)), h(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) { v += a * n(p); p = m * p; a *= 0.5; }
  return v;
}
void main() {
  vec2 p = gl_FragCoord.xy / r.y * 1.15;
  float s = t * 0.035;
  vec2 q = vec2(fbm(p + vec2(0.0, s)), fbm(p + vec2(5.2, 1.3) - s));
  vec2 w = vec2(fbm(p + 3.0 * q + vec2(1.7, 9.2) + s * 1.4), fbm(p + 3.0 * q + vec2(8.3, 2.8) - s));
  float smoke = smoothstep(0.32, 0.92, fbm(p + 3.4 * w));
  vec2 uv = gl_FragCoord.xy / r;
  float light = 0.3 + 0.7 * smoothstep(1.35, 0.0, distance(uv, vec2(0.12, 1.08)));
  gl_FragColor = vec4(vec3(0.03 + smoke * 0.46 * light), 1.0);
}`;
export const SmokeCanvas = function () {
  let e = React.useRef(null);
  return (
    React.useEffect(() => {
      let t = () => {},
        n = 0,
        i = () => {
          t =
            (function (e) {
              let t = navigator.connection;
              if (!e || t?.saveData) return;
              let n = e.getContext("webgl", {
                antialias: false,
                alpha: false,
                powerPreference: "low-power",
              });
              if (!n) return;
              let i = n.getExtension("WEBGL_debug_renderer_info"),
                a = i ? String(n.getParameter(i.UNMASKED_RENDERER_WEBGL)) : "";
              if (
                /swiftshader|llvmpipe|softpipe|software|basic render/i.test(a)
              )
                return;
              let o = (e, t) => {
                  let r = n.createShader(e);
                  return (n.shaderSource(r, t), n.compileShader(r), r);
                },
                l = n.createProgram();
              if (
                (n.attachShader(
                  l,
                  o(
                    n.VERTEX_SHADER,
                    "attribute vec2 a;void main(){gl_Position=vec4(a,0.0,1.0);}",
                  ),
                ),
                n.attachShader(l, o(n.FRAGMENT_SHADER, r)),
                n.linkProgram(l),
                !n.getProgramParameter(l, n.LINK_STATUS))
              )
                return;
              (n.useProgram(l),
                n.bindBuffer(n.ARRAY_BUFFER, n.createBuffer()),
                n.bufferData(
                  n.ARRAY_BUFFER,
                  new Float32Array([-1, -1, 3, -1, -1, 3]),
                  n.STATIC_DRAW,
                ),
                n.enableVertexAttribArray(0),
                n.vertexAttribPointer(0, 2, n.FLOAT, false, 0, 0));
              let s = n.getUniformLocation(l, "r"),
                c = n.getUniformLocation(l, "t"),
                d = () => {
                  ((e.width = Math.max(1, Math.round(e.clientWidth / 2))),
                    (e.height = Math.max(1, Math.round(e.clientHeight / 2))),
                    n.viewport(0, 0, e.width, e.height),
                    n.uniform2f(s, e.width, e.height));
                },
                u = performance.now() - 2e4,
                m = (e) => {
                  (n.uniform1f(c, (e - u) / 1e3),
                    n.drawArrays(n.TRIANGLES, 0, 3));
                },
                f = window.matchMedia(
                  "(prefers-reduced-motion: reduce)",
                ).matches,
                p = 0,
                h = 0,
                x = true,
                g = (e) => {
                  ((p = requestAnimationFrame(g)),
                    e - h < 33 || ((h = e), m(e)));
                },
                b = () => {
                  p ||
                    !x ||
                    f ||
                    document.hidden ||
                    (p = requestAnimationFrame(g));
                },
                v = () => {
                  (cancelAnimationFrame(p), (p = 0));
                },
                y = new ResizeObserver(() => {
                  (d(), m(performance.now()));
                }),
                w = new IntersectionObserver(([e]) => {
                  (x = e.isIntersecting) ? b() : v();
                }),
                j = () => (document.hidden ? v() : b());
              return (
                d(),
                m(performance.now()),
                (e.dataset.on = ""),
                y.observe(e),
                w.observe(e),
                document.addEventListener("visibilitychange", j),
                b(),
                () => {
                  (v(),
                    y.disconnect(),
                    w.disconnect(),
                    document.removeEventListener("visibilitychange", j));
                }
              );
            })(e.current) ?? (() => {});
        },
        a = () => {
          let e = window.requestIdleCallback;
          n = e
            ? e(i, {
                timeout: 2500,
              })
            : window.setTimeout(i, 1200);
        };
      return (
        "complete" === document.readyState
          ? a()
          : window.addEventListener("load", a, {
              once: true,
            }),
        () => {
          window.removeEventListener("load", a);
          let e = window.cancelIdleCallback;
          (e && e(n), window.clearTimeout(n), t());
        }
      );
    }, []),
    (
      <canvas
        ref={e}
        aria-hidden="true"
        className="absolute inset-0 size-full opacity-0 transition-opacity duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] data-[on]:opacity-100"
      />
    )
  );
};
