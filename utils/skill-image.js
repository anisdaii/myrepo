import angular from '../app/assets/svg/skills/angular.svg';
import aws from '../app/assets/svg/skills/aws.svg';
import azure from '../app/assets/svg/skills/azure.svg';
import blender from '../app/assets/svg/skills/blender.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import c from '../app/assets/svg/skills/c.svg';
import cplusplus from '../app/assets/svg/skills/cplusplus.svg';
import csharp from '../app/assets/svg/skills/csharp.svg';
import css from '../app/assets/svg/skills/css.svg';
import dart from '../app/assets/svg/skills/dart.svg';
import django from '../app/assets/svg/skills/django.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';
import flutter from '../app/assets/svg/skills/flutter.svg';
import git from '../app/assets/svg/skills/git.svg';
import haxe from '../app/assets/svg/skills/haxe.svg';
import html from '../app/assets/svg/skills/html.svg';
import illustrator from '../app/assets/svg/skills/illustrator.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import kotlin from '../app/assets/svg/skills/kotlin.svg';
import microsoftoffice from '../app/assets/svg/skills/microsoftoffice.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import numpy from '../app/assets/svg/skills/numpy.svg';
import opencv from '../app/assets/svg/skills/opencv.svg';
import photoshop from '../app/assets/svg/skills/photoshop.svg';
import php from '../app/assets/svg/skills/php.svg';
import python from '../app/assets/svg/skills/python.svg';
import pytorch from '../app/assets/svg/skills/pytorch.svg';
import react from '../app/assets/svg/skills/react.svg';
import ruby from '../app/assets/svg/skills/ruby.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import tensorflow from '../app/assets/svg/skills/tensorflow.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';

import pandas from '../app/assets/svg/skills/pandas.svg';
import scikitlearn from '../app/assets/svg/skills/scikit-learn.svg';
import dotnet from '../app/assets/svg/skills/dotnet.svg';
import dotnetcore from '../app/assets/svg/skills/dotnetcore.svg'
import kubernetes from '../app/assets/svg/skills/kubernetes.svg'
import linux from '../app/assets/svg/skills/linux.svg'



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();

  switch (skillID) {
    case 'angular':
      return angular;
    case 'aws':
      return aws;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'bootstrap':
      return bootstrap;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'css':
      return css;
    case 'dart':
      return dart;
    case 'django':
      return django;
    case 'docker':
      return docker;
    case 'figma':
      return figma;
    case 'firebase':
      return firebase;
    case 'flutter':
      return flutter;
    case 'git':
      return git;
    case 'haxe':
      return haxe;
    case 'html':
      return html;
    case 'illustrator':
      return illustrator;
    case 'java':
      return java;
    case 'javascript':
      return javascript;
    case 'kotlin':
      return kotlin;
    case 'microsoft office':
      return microsoftoffice;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'next js':
      return nextJS;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'photoshop':
      return photoshop;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'pytorch':
      return pytorch;
    case 'react':
      return react;
    case 'ruby':
      return ruby;
    case 'tailwind':
      return tailwind;
    case 'tensorflow':
      return tensorflow;
    case 'typescript':
      return typescript;
    case 'pandas':
      return pandas;
    case 'sklearn':
      return scikitlearn;
    case '.net':
      return dotnet;
    case '.net core':
      return dotnetcore;
    case 'kubernetes':
      return kubernetes;
    case 'linux':
      return linux;
    default:
      return null;
  }
};
