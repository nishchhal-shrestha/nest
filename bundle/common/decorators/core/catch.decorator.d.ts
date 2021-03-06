import 'reflect-metadata';
import { Type } from '../../interfaces';
/**
 * Defines the Exceptions Filter. Takes set of exception types as an argument which has to be caught by this Filter.
 * The class should implement the `ExceptionFilter` interface.
 */
export declare function Catch(...exceptions: Type<any>[]): ClassDecorator;
