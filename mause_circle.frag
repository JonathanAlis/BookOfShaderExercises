#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;

    float r = 0.3;    
    float y = r*(1.-sin(3.*PI*u_time));
    float x = r*cos(3.*PI*u_time);
    vec2 center = u_mouse/u_resolution;
    
    vec3 color = vec3(0.);
    
    float distanceToMouse = distance(st, center);
    if (distanceToMouse<=0.001){
        color = vec3(1.);
    }

    float d = distance(st, center-vec2(x,y));
    if (d<=0.05){
        color = vec3(1.,0.,0.);
    }
    gl_FragColor = vec4(color,1.0);
}