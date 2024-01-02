#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;

    float r = 0.2;  
    float t = 1.3*PI*u_time;  
    //float y = r*(sin(3.*PI*u_time)*(1.0+sin(t)));
    //float x = r*cos(3.*PI*u_time)*(1.0+sin(t));
    float y = -r*(-cos(t)*cos(t)*cos(t)-cos(t)*cos(t)+2.*cos(t));
    float x = r*sqrt(2.)*sin(t)*sin(t)*sin(t);
    vec2 center = vec2(0.5,0.5);//u_mouse/u_resolution;
    
    vec3 color = vec3(0.);
    
    float distanceToMouse = distance(st, center);
    if (distanceToMouse<=0.001){
        color = vec3(1.);
    }

    float d = distance(st, center-vec2(x,y));
    if (d<=0.025){
        color = vec3(1.,0.,0.);
    }
    gl_FragColor = vec4(color,1.0);
}