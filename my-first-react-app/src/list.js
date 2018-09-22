import React from 'react';
export const List =(props)=><div>
                                <ul>
                                    {
                                        props.name.map(item => <li> {item} </li>)
                                    }
                                </ul>
                            </div>