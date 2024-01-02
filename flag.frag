#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 colorA = vec3(0.0745, 0.4196, 0.9373);
vec3 colorB = vec3(0.9529, 0.9804, 0.1608);
vec3 colorC = vec3(1.0, 0.2235, 0.2235);


void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    float pct = step(st.y, 0.5);

    color = mix(colorB, colorA, pct);
    //color = mix(colorB, colorC, pct);

    gl_FragColor = vec4(color,1.0);
}